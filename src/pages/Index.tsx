import BaseContainer from '../components/BaseContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import { GasStationProvider } from '../providers/GasStationProvider';

const Index = () => {
  return (
    <GasStationProvider>
      <BaseContainer>
        <Header />
        <Main />
        <Footer />
      </BaseContainer>
    </GasStationProvider>
  );
};

export default Index;
