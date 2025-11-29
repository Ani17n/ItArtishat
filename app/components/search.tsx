import { FC } from "react";

let arr: any = [];

for (let i = 0; i < 500; i++) {
  arr.push({
    id: i,
    name: `name${i}`,
  });
}

interface Props {
  value: string;
}

const Search: FC<Props> = ({ value }) => {
  return (
    <div>
      {arr
        .filter((el: any) => el.name.includes(value))
        .map((el: any) => {
          return <div>{el.name}</div>;
        })}
    </div>
  );
};

export default Search;
