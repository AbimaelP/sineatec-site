import Image from 'next/image'
import Text from '@/components/Text'
import Layout from '@/components/LayoutContainer'

export default function Home() {
  return (
    <main>
      <Layout className='relative image_main'>
        <Image
          src="/assets/imgs/tec.png"
          width={400}
          height={400}

          alt="Picture of the author"
        />
        <Layout className='absolute top-0 w-2/4 right-0 flex items-center h-full'>
          <Layout>
            <Text>
              Bem-vindo(a)
            </Text>
            <Text>
              Na Sineatec, estamos comprometidos em ser o parceiro ideal para suas necessidades de desenvolvimento de software. Somos especializados em criar soluções personalizadas que atendem às suas expectativas e impulsionam o sucesso do seu negócio.
            </Text>
          </Layout>
        </Layout>
      </Layout>
    </main>
  )
}
