import Counter from './Counter';
import ConvertCurrency from './CurrencyConvertor';

const Eight = () => {
    return (
        <div className='handson_eight    mt-32'>
            <div className="flex flex-col gap-5">
                <Counter />
                <ConvertCurrency />
            </div>
        </div>
    );
};

export default Eight;
