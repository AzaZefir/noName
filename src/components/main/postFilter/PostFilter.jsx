import React from "react";
import MyInput from "../../UI/myInput/MyInput";
import MySelect from "../../UI/mySelect/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        placeholder="Search..."
        type="text"
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by..."
        options={[
          { value: "title", name: "Sort by title" },
          { value: "body", name: "Sort by description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
