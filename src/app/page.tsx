import { useState } from "react";

import { Input } from "@/components/Input";
import { ImageDisplay } from "@/components/ImageDisplay ";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Logo } from "@/components/Logo";

export default function Home() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-row w-full h-screen ">
      <div className="w-full md:w-[50%] sm:w-[45%] lg:w-[50%] xl:w-[35%] 2xl:w-[25%] h-screen  flex flex-col justify-center gap-y-20 max-sm:p-4 max-md:p-8 p-12">
        <div className="absolute top-10">
          <Logo />
        </div>
        <Heading
          title="Encurte suas URLS"
          subtitle="Transforme Urls longas em curtas"
          big
        />
        <Input
          label="Insira a URL que deseja encurtar"
          value={value}
          setValue={setValue}
          placeholder="http://example.com.br"
        />
        <Footer />
      </div>
      <ImageDisplay loading={loading} setLoading={setLoading} />
    </div>
  );
}
