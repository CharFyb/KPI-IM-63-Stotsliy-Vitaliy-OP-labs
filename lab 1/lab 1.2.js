const arr = [
  true,
  'hello',
  42,
  'world',
  false,
  100,
  null,
  undefined,
  { name: 'John' },
  [1, 2, 3],
  'js',
  false,
  -3.14
]

const coll = {}

for (const item of arr) {
    const type = typeof item

    if (!(type in coll)) {
        coll[type] = 0
    }

    coll[type] += 1
}

console.dir(coll)