import Props from './interfaces';

const Form = (props: Props) => {
    return (
        <div className="flex flex-col">
            <label className="font-bold"> {props.label}</label>
            <input
                className="border py-2 bg-gray-100"
                type="text"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Form;