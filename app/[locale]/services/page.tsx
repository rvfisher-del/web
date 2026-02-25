import { HeroBasic } from "@/app/components/services/HeroBasic";
import { Statistics } from "@/app/components/services/Statistics";
import { ServicesGrid } from "@/app/components/services/ServicesGrid";

export const metadata = {
  title: "Globe Services | Mantenimiento de Ascensores en Santiago",
  description: "Servicio profesional de mantenimiento, reparación y modernización de ascensores en Santiago. 300+ edificios, 700+ ascensores.",
};

export default function ServicesPage() {
  return (
    <div>
      <HeroBasic />
      <Statistics />
      <ServicesGrid />
    </div>
  );
}
