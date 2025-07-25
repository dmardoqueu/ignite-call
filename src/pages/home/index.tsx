import { Heading, Text } from "@ignite-ui/react";
import Image from "next/image";
import { Container, Hero, Preview } from "./styles";

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <>
            <NextSeo
                title="Home | Ignite Call"
                description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
            />

            <Container>
                <Hero>
                    <Heading size="4xl">Agendamento Descomplicado</Heading>
                    <Text size="lg">
                        Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
                    </Text>

                    <ClaimUsernameForm />
                </Hero>

                <Preview>
                    <Image
                        src={previewImage}
                        height={400}
                        quality={100}
                        priority
                        alt="Calendário simulando aplicação"
                    />
                </Preview>
            </Container>
        </>
    );
}