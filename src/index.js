import "./styles.css";
import _ from "./lodash";
import e_ from "lodash";

console.log("es6 filter", _.filter([1, 2, 3, 5], d => d > 2));
console.log("lodash", e_.filter([1, 2, 3, 5], d => d > 2));

console.log("es6 find", _.find([1, 2, 3, 5], d => d === 3));
console.log("lodash", e_.find([1, 2, 3, 5], d => d === 3));

console.log(
  "es6 map",
  _.map([1, 2, 3, 5], d => {
    return {
      ["index" + d]: d
    };
  })
);
console.log(
  "lodash",
  e_.map([1, 2, 3, 5], d => {
    return {
      ["index" + d]: d
    };
  })
);

console.log("es6 pick", _.pick({ a: 1, b: "2", c: 3 }, ["a", "b"]));
console.log("ladash", e_.pick({ a: 1, b: "2", c: 3 }, ["a", "b"]));

console.log("native forEach", _.each([1, 2, 3, 5], d => console.log(d)));
console.log("lodash", _.each([1, 2, 3, 5], d => console.log(d)));

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
