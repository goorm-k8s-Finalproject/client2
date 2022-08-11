import ItemDisplay from '../components/ItemDisplay';
import ItemPrice from '../components/ItemPrices';
import PriceHistory from '../components/PriceHistory';
import DlcDisplay from '../components/DlcDisplay';

const DetailPage = () => {
    return (
        <section>
            <ItemDisplay />
            <ItemPrice />
            <PriceHistory />
            <DlcDisplay />
        </section>
    );
};

export default DetailPage;