import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {createCar} from "../../services/api-service.ts";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCarFormComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});
    const handler = (data:ICar)=> {
        createCar(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(handler)}>
                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <button>save car</button>
            </form>
        </>
    );
}

