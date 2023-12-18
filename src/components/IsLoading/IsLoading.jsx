import { Background, LoadingText } from './Styles';
import Spinner from '/assets/IsLoading/loading-spinner.gif';

export default function IsLoading() {
  return (
    <Background>
      <LoadingText>Waiting for cocktail data...</LoadingText>
      <img src={Spinner} alt='fetching data gif' width='20%' />
    </Background>
  );
}
