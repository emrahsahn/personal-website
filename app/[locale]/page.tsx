import { setRequestLocale } from "next-intl/server";
import HomeClient from "@/components/HomeClient";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  setRequestLocale(params.locale);

  return <HomeClient />;
}
