import HomePage from "./home";
import { opusMentorStore } from "@/sdk";

export default function Home() {
  const { initFirebase } = opusMentorStore.firebase.default;
  const app = initFirebase();

  return (
    <>
      <HomePage />
    </>
  );
}
