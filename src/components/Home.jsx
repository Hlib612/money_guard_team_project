import Container from "./Container";
import HomeModalTransaction from "./HomeModal";
import css from '../css_modules/Home.module.css'
export default function Home() {
  return (
    <Container>
        <section className={css.section}>
        <HomeModalTransaction/>
        </section>
    </Container>
  );
}
