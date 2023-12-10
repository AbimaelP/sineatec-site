import Form from "@/components/Form"
import Button from "@/components/Button"
import Layout from "@/components/LayoutContainer"
import Input from "@/components/Input"
import Text from "@/components/Text"

export default function Login(){
    return (
        <Layout className="h-full w-full">
            <Layout className="flex justify-center">
                <Text className="text-2xl text-[--default-place-color]">ECCOM GEN</Text>
            </Layout>
            <Layout className="flex justify-center h-full items-center">
                <Layout className="bg-[#AB94EC] w-2/6 py-8 px-12 pb-12 rounded-lg ">
                    <Form > 
                        <Layout className="flex flex-col w-full h-72 justify-between items-center">
                            <Text className="text-white text-3xl font-medium"> Cadastre-se </Text>
                            <Input placeholder="Entre com e-mail, telefone ou CPF" className="h-11 w-full"></Input>
                            <Input placeholder="Senha" className="h-11 w-full"></Input>
                            <Layout className="flex justify-start w-full">
                                <Input type="checkbox" placeholder="Senha" className="h-[20px] w-[20px]"></Input>
                            </Layout>
                            <Button type="submit" className="bg-[--input-color-default] p-2 px-6 rounded text-[--default-text-color] hover:bg-[--btn-hover-default] hover:text-[#ffff]">Cadastrar</Button>
                        </Layout>
                    </Form>
                </Layout>
            </Layout>
        </Layout>
    )
}