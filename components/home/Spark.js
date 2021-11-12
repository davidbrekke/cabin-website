import Image from 'next/image'
import fireImage from '../../public/campfire.jpg';
import sparkImage from '../../public/spark.svg';
import { styled, keyframes } from '../../stitches.config.ts';
import Wrapper from '../Wrapper';

export default function SideImage() {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Frame>
            <Image
              src={fireImage}
              alt="A campfire"
              quality={100}
            />
            <Spark>
              <Image
                src={sparkImage}
                alt="An abstract illustration of a spark"
                quality={100}
              />
            </Spark>
          </Frame>
        </Content>
      </Wrapper>
      <Marquee>
        <div>
          <span>
            Get creative work done with internet friends. Get creative work done with internet friends. Get creative work done with internet friends.&nbsp;
          </span>
          <span>
            Get creative work done with internet friends. Get creative work done with internet friends. Get creative work done with internet friends.&nbsp;
          </span>
        </div>
      </Marquee>
    </Container>
  )
}

const Container = styled('section', {
  bc: '$forest',
  position: 'relative',
});

const Content = styled('div', {
  color: '$sand',
  py: '$20',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@md': {
    py: '$24',
  },
});

const Frame = styled('div', {
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  lineHeight: '0',
  position: 'relative',
  maxWidth: '30rem',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.50',
  },
});

const Spark = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: '$1',
});

const marquee = keyframes({
  '0%': { transform: 'translate3d(0, 0, 0)' },
  '100%': { transform: 'translate3d(-50%, 0, 0)' },
});

const Marquee = styled('div', {
  overflow: 'hidden',
  width: '100%',
  color: '$sand',
  fontSize: '$xxl',
  fontFamily: '$mono',
  fontWeight: '$600',
  top: '50%',
  position: 'absolute',
  transform: 'translate3d(0, -50%, 0)',
  zIndex: '$1',
  div: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline-block',
    animation: `${marquee} 30s linear infinite`,
  },
  span: {
    display: 'inline-block',
    bc: '$forest',
    py: '$3',
    mt: '$1',
  }
});

