import { useState } from "react";

const AdminPage = () => {
  const [option, setOption] = useState("users");
  return (
    <div className="bg-primaryLight flex flex-row h-screen">
      <div className="bg-secondaryLight pt-8">
        <div className="text-primaryLight text-3xl font-bold px-10">
          Admin Panel
        </div>
        <div className="mt-8 block">
          <ul className="text-primaryLight text-center text-xl font-bold">
            <li onClick={() => setOption("users")} className="py-4 hover:bg-primaryLight hover:bg-opacity-20 cursor-pointer">
              Użytkownicy
            </li>
            <li onClick={() => setOption("classes")} className="py-4 hover:bg-primaryLight hover:bg-opacity-20 cursor-pointer">
              Zajęcia
            </li>
          </ul>
        </div>
      </div>
      <main className="flex-grow">
        {option === "users" && <Users /> ||
          option === "classes" && <Classes />}
      </main>
    </div>
  );
};
const Users = () => {
  return <div>Users</div>;
};
const Classes = () => {
  return (<div>Classes</div>);
};

export default AdminPage;
