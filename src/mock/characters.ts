export type CharacterProps = {
  name: string;
  class: string,
  pvpRecords: {
    win: number;
    lose: number;
    draw: number;
    records: () => string;
    winRate: () => string;
  }
}

export const Characters: CharacterProps[] = [
  {
    name: 'NotASlayer',
    class: 'Punisher',
    pvpRecords: {
      win: 500,
      lose: 150,
      draw: 10,
      records: function () { return `${this.win} / ${this.lose} / ${this.draw}` },
      winRate: function () { return `${((this.win / (this.win + this.lose + this.draw)) * 100).toFixed(2)}% Win Rate` }
    }
  },
  {
    name: 'NotASin',
    class: 'Crimson Phantom',
    pvpRecords: {
      win: 125,
      lose: 100,
      draw: 7,
      records: function () { return `${this.win} / ${this.lose} / ${this.draw}` },
      winRate: function () { return `${((this.win / (this.win + this.lose + this.draw)) * 100).toFixed(2)}% Win Rate` }
    }
  },
  {
    name: 'NotAShadow',
    class: 'Shadow',
    pvpRecords: {
      win: 70,
      lose: 62,
      draw: 0,
      records: function () { return `${this.win} / ${this.lose} / ${this.draw}` },
      winRate: function () { return `${((this.win / (this.win + this.lose + this.draw)) * 100).toFixed(2)}% Win Rate` }
    }
  },
]