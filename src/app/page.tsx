"use client";

import { useState } from "react";

import { Container } from "@/components/Container";
import { Input } from "@/components/Input";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Input
        label="Insira a url que deseja encurtar"
        value={value}
        setValue={setValue}
        placeholder="http://example.com.br"
      />
    </Container>
  );
}
