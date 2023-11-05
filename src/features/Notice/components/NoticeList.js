import React from "react";
import ListItemNotice from "./ListItemNotice";
import data from "../../../data.json";

export default function NoticeList() {
  const notices = data.notices;

  return (
    <div className="flex-col justify-center items-center h-full mt-4">
        {notices.map((notice) => (
            <ListItemNotice key={notice.id} notice={notice}></ListItemNotice>
        ))}
    </div>
  );
}
