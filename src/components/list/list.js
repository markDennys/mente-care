import React, { useState, useEffect } from "react";
import Svgs from '../../components/universalComponents/backgroundSvg/Svgs'
import "./list.css";
import { Dark } from '../../services/Dark'
import Paciente from '../../services/Paciente'



const List = () => {

    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState([]);

    const showMo = () => {
        setShowModal(!showModal)

    }


    useEffect(() => {
        const getData = async () => {
            const materiais = await fetch(
                'https://raw.githubusercontent.com/rede-cidada/fake-data-api/main/mente-care/data.json'
            );
            const data = await materiais.json();

            setDate(data);
        };
        getData();
    }, []);



    return (


        <>
            <div className={Dark[0].dark === "" ? "divMain" : "divMain darkMain"}>


                <h1 className="title-list" >Todas as Clínicas</h1>

                <svg onClick={showMo} className={Dark[0].dark === "" ? "filter" : "filter filterDark"} background="red" height="33pt" viewBox="-4 0 393 393.99003" xmlns="http://www.w3.org/2000/svg"><path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0" /></svg>

                <Svgs />
                <div className="grid-card">

                    {date.map(({ id, nome, cidade, image, descricao }) => (
                        <div className="card-main" key={id}>

                            <div className="rotate">

                                <div className="img-card-area">
                                    <img className="img-card" src={image} alt="" />
                                    <h4 className="city"> {cidade}</h4>
                                </div>
                                <div className="card-infos">
                                    <h3> {nome}</h3>

                                    <p> {descricao}</p>
                                    <button className={Paciente[0].on === 0 ? "button-agend" : "showBUtton-agend"} >Marcar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={showModal !== true ? 'box-filter' : 'box-filter show-filter'}>

                    <div className="close-modal" onClick={() => (setShowModal(!showMo))} >X</div>


                    <div className="box-label">

                        <label className="text-modal" for="ordenar">Ordenar por:</label>
                    </div>

                    <div className="box-filter-select">

                        <select class="select-inputs" name="filter" id="filter">
                            <option value="padrao">Padrão</option>
                            <option value="maisProximo">Mais próximo</option>
                            <option value="maisProcurados">Mais procurados</option>
                            <option value="precoCrescente">Preço crescente</option>
                            <option value="precooDecrescente">Preço decrescente</option>
                        </select>
                    </div>

                    <div className="box-input">
                        <input className="input-submit" type="submit" value="Pesquisar" id="filter" />
                    </div>

                </div>

            </div>


        </>

    );
}

export default List;