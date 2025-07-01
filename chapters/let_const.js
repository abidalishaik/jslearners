// scopes in js

// global scope
// local scope
// function scope
// block scope

// vv = 6128;
// var v = 6127;

// var v;

// let v2 = 6127;

// const v3 = 6127;

// test();

function test() {
  // if (v == 22) console.log(123);
  // else console.log(undefined, 'v is not 22');
  var v = 6126;
  function inner() {
    var v = 1234;
    console.log("inner ", v);

    // v = 618;
    function innerMost() {
      console.log("innerMost ", v);
    }
    // ...rest of the code
    innerMost();
  }
  console.log("outer ", v);

  inner();
}

function blockScopeTest() {
  console.log(v);
  let v2 = 5678; // block scoped
  const v3 = 91011; // block scoped
  // if (true) {
  //   console.log("inside if block", v, v2, v3);
  // }

  // console.log("outside if block", v, v2, v3); // v is accessible, but v2 and v3 are not
  function innerBlock() {
    // var v2 = 9999; // block scoped
    console.log("inside innerBlock", v, v2, v3);
  }
  var v = 123;

  innerBlock();
  console.log(v2);
}

blockScopeTest();

// console.log(v);

// test();
