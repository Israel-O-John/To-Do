import MiniCalendar from "./MiniCalendar";
import Tasks from "./Tasks";
import InputSection from "./InputSection";

function Main() {
  return (
    <main className=" md:flex justify-between md:w-11/12 md:mx-auto md:items-start md:gap-5">
      <div className="space-y-8 md:w-[70%]  ">
        <MiniCalendar />
        <Tasks />
      </div>
      <InputSection />
    </main>
  );
}
export default Main;
