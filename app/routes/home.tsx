import type { Route } from "./+types/home";
import { Portfolio } from "../components/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Syed Mohamad Arif | Frontend/Mobile App Developer" },
    { name: "description", content: "Portfolio of Syed Mohamad Arif - A dedicated Frontend Developer with 4 years of experience specializing in React Native for mobile apps and React for web platforms." },
  ];
}

export default function Home() {
  return <Portfolio />;
}
