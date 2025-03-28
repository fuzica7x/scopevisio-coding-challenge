import BaseContainer from '../components/BaseContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import { FilterProvider } from '../providers/FilterProvider';
import { GasStationProvider } from '../providers/GasStationProvider';

const Index = () => {
  return (
    <GasStationProvider>
      <FilterProvider>
        <BaseContainer>
          <Header />
          <Main />
          <Footer />
        </BaseContainer>
      </FilterProvider>
    </GasStationProvider>
  );
};

export default Index;
