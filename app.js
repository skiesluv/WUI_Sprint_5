class Student {
  constructor(fullName, direction) {
    this.fullName = fullName;
    this.direction = direction;
  }
}

const obj = {
  get(stud) {
    return stud.direction;
  },

  set(stud) {
    console.log('Direction is', stud.direction);
  }
};

function showFullName(stud)
{
  return stud.fullName;
}

function nameIncludes(data, stud)
{
  sfn = showFullName(stud);
  console.log(sfn.includes(data))
}


const stud1 = new Student('Ivan Petrenko', 'web');

const stud2 = new Student('Sergiy Koval', 'python');

console.log(stud1)
console.log(stud2)

function studentBuilder(fullName, direction) {
  const stud3 = new Student(fullName, direction);
  return stud3;
}

console.log(showFullName(stud1))

nameIncludes('Ivan', stud1)

nameIncludes('Void', stud1)

console.log(studentBuilder('Ihor Kohut', 'qc'))