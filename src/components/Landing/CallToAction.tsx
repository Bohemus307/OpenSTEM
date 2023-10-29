import { Button } from '@components/Button'
import { Container } from '@components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your scientific trialing. By utilizing
            OpenSTEM you can break barriers you never imagined.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Join Beta testing
          </Button>
        </div>
      </Container>
    </section>
  )
}
