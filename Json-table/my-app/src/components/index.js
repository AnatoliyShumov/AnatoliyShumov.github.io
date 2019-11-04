export default from './lib/NestedJsonTable'
const foo1 = () => {console.log(1); return true;};
const foo2 = () => {console.log(2); return false;};
const foo3 = () => {console.log(3); return 42;};
const foo4 = () => {console.log(4); return 0;};
const foo5 = () => {console.log(5); return '0';};
const foo6 = () => {console.log(6); return null;};
const foo7 = () => {console.log(7); return NaN;};
const foo8 = () => {console.log(8); return {};};
const foo9 = () => {console.log(9); return [];};
const foo10 = () => {console.log(10); return Infinity;};

console.log( !foo1() && !!foo3() || foo9() );

console.log( foo6() || foo7() && foo10() );

console.log( foo2() || foo4() || !foo8() );

console.log( !foo6() && foo5() && !foo3() || !!foo9() );
