import React from 'react'
import './Panel.css'
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Panel = (props) => {


  return (
    <div className="row justify-content-center">
        <div className="row rounded-2 py-3 shadow-sm bg-white position-absolute panel">
            <h6 className="fw-bold px-4">{!props.cari ? "Pencarianmu" : ""}</h6>


            <div className={`d-flex ${props.show ? "col-11" : "col-12"}`}>
                <div className="col-3 px-2">
                    <div className="my-3">
                    <label className="form-label fs-6">Tipe Driver</label>
                    <select id="disabledSelect" className="form-select" disabled={props.form}>
                        <option></option>
                        <option>Disabled select</option>
                        
                    </select>
                    </div>
                </div>
                
                <div className="col-3 px-2">
                    <div className="my-3">
                        <label className="form-label">Tanggal</label>
                        <input type="date" className="form-control" disabled={props.form}/>
                    </div>
                </div>

                <div className="col-3 px-2">
                    <div className="my-3">
                        <label className="form-label">Jam, waktu jemput/ambil</label>
                        <input type="time" className="form-control"  disabled={props.form} />
                    </div>
                </div>

                <div className="col-3 px-2">
                    <div className="my-3">
                        <label className="form-label">Jumlah penumpang (opsional)</label>
                        <input type="number" className="form-control" disabled={props.form} />
                    </div>
                </div>

            </div>

            <div className={props.show ? 'col-1 px-0' : 'd-none'}>
                <Link to='/cari' className={`btn ${props.edit ? 'btn btn-outline-primary' : 'btn-success'} mt-5`}>
                    <small>
                        {!props.cari ? "Edit" : "Cari mobil"}
                    </small>
                </Link>
            </div>
        </div>

        <div className="spacer"></div>
    </div>
   
  )
}

const getData = () => async(dispatch) => {
    let data = await fetch('https://rent-cars-api.herokuapp.com/customer/car')
    let datas = await data.json();
    return dispatch({type:'FETCH_DATA', payload: datas})
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: () => dispatch({type:'CHANGE_STATUS',status:1})
    }
}

export default connect(null,mapDispatchToProps)(Panel)
