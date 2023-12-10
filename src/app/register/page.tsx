import Form from "@/components/Form"
import Button from "@/components/Button"
import Layout from "@/components/LayoutContainer"
import Input from "@/components/Input"
import Text from "@/components/Text"

export default function Register(){
    return (
        <Layout className="h-full w-full">
            <Layout className="flex justify-center">
                <Text className="text-2xl text-[--default-place-color]">ECCOM GEN</Text>
            </Layout>
            <Layout className="flex justify-center h-full items-center">
                <Layout className="bg-[#AB94EC] w-2/6 py-8 px-12 pb-24 rounded-lg ">
                    <Form > 
                        <Layout className="flex flex-col w-full h-96 justify-between items-center">
                            <Text className="text-white text-3xl font-medium"> Cadastre-se </Text>
                            <Input placeholder="Nome" className="h-11 w-full"></Input>
                            <Input placeholder="E-mail" className="h-11 w-full"></Input>
                            <Input placeholder="Senha" className="h-11 w-full"></Input>
                            <Input placeholder="Telefone" className="h-11 w-full"></Input>
                            <Input placeholder="CPF" className="h-11 w-full"></Input>
                            <Button type="submit" className="bg-[--input-color-default] p-2 px-6 rounded text-[--default-text-color] hover:bg-[--btn-hover-default] hover:text-[#ffff]">Cadastrar</Button>
                        </Layout>
                    </Form>
                </Layout>
            </Layout>
        </Layout>
    )
}