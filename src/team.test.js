/* eslint-env jest */
import Team from '../src/team';

class Character {
  constructor(name) {
    this.name = name;
  }
}

describe('Team', () => {
  test('add: adds new member', () => {
    const team = new Team();
    const a = new Character('Bowman');
    team.add(a);
    expect(team.members.has(a)).toBe(true);
    expect(team.toArray()).toEqual([a]);
  });

  test('add: throws on duplicate', () => {
    const team = new Team();
    const a = new Character('Daemon');
    team.add(a);
    expect(() => team.add(a)).toThrow('Character already in the team');
  });

  test('addAll: adds many and ignores duplicates (no error)', () => {
    const team = new Team();
    const a = new Character('Swordsman');
    const b = new Character('Magician');
    team.addAll(a, b, a);
    expect(team.members.size).toBe(2);
    expect(team.toArray()).toEqual([a, b]);
  });

  test('toArray: returns a plain array copy', () => {
    const team = new Team();
    const a = new Character('Zombie');
    team.add(a);
    const arr = team.toArray();
    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toEqual([a]);
  });
});
