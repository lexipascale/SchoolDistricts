class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newStudentCount) {
      if (newStudentCount == 'number') {
        this._numberOfStudents = newStudentCount;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeachers(substituteTeachers) {
      const randomIndex = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[randomIndex];
    }
  };
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  };
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name, 'high', numberOfStudents);
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam() {
      return this._sportsTeam;
    }
  };
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  };
  
  
  const Sapphire = new PrimarySchool('Sapphire', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  const NorthMain = new MiddleSchool('North Main', 396);
  const SmithClove = new HighSchool('Smith Clove', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  Sapphire.quickFacts();
  const subs = School.pickSubstituteTeachers(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log(NorthMain.numberOfStudents);
  console.log(SmithClove.sportsTeam);