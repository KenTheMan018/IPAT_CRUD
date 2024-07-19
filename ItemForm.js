import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [place_of_birth, setPlace_of_birth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBlood_type] = useState('');
    const [gsis_id_no, setGsis_id_no] = useState('');
    const [pagibig_id_no, setPagibig_id_no] = useState('');
    const [philhealth_no, setPhilhealth_no] = useState('');
    const [sss_no, setSss_no] = useState('');
    const [tin_no, setTin_no] = useState('');
    const [agency_employee_no, setAgency_employee_no] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residential_address, setResidential_address] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [permanent_address, setPermanent_address] = useState('');
    const [telephone_no, setTelephone_no] = useState('');
    const [mobile_no, setMobile_no] = useState('');
    const [email_address, setEmail_address] = useState('');
    const [fathers_name, setFathers_name] = useState('');
    const [mothers_name, setMothers_name] = useState('');

    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name);
            setMiddle_name(item.middle_name);
            setLast_name(item.last_name);
            setDate_of_birth(item.date_of_birth);
            setPlace_of_birth(item.place_of_birth);
            setSex(item.sex);
            setCivil_status(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBlood_type(item.blood_type);
            setGsis_id_no(item.gsis_id_no);
            setPagibig_id_no(item.pagibig_id_no);
            setPhilhealth_no(item.philhealth_no);
            setSss_no(item.sss_no);
            setTin_no(item.tin_no);
            setAgency_employee_no(item.agency_employee_no);
            setCitizenship(item.citizenship);
            setResidential_address(item.residential_address);
            setZip_code(item.zip_code);
            setPermanent_address(item.permanent_address);
            setTelephone_no(item.telephone_no);
            setMobile_no(item.mobile_no);
            setEmail_address(item.email_address);
            setFathers_name(item.fathers_name);
            setMothers_name(item.mothers_name);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name, middle_name, last_name, date_of_birth, place_of_birth, sex, civil_status, height, weight, blood_type,
            gsis_id_no, pagibig_id_no, philhealth_no, sss_no, tin_no, agency_employee_no, citizenship, residential_address,
            zip_code, permanent_address, telephone_no, mobile_no, email_address, fathers_name, mothers_name
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    return (
        <form className="form-container"  onSubmit={handleSubmit}>
            <h1>PERSONAL INFORMATION FORM</h1>
            <div className="form-group">
                <label>First Name</label>
                <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Middle Name</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Date of Birth</label>
                <input type='date' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Place of Birth</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Sex</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Civil Status</label>
                <input type='text' value={civil_status} onChange={(e) => setCivil_status(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Height (m)</label>
                <input type='number' step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Weight (kg)</label>
                <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Blood Type</label>
                <input type='text' value={blood_type} onChange={(e) => setBlood_type(e.target.value)} />
            </div>
            <div className="form-group">
                <label>GSIS ID No.</label>
                <input type='text' value={gsis_id_no} onChange={(e) => setGsis_id_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>PAG-IBIG ID No.</label>
                <input type='text' value={pagibig_id_no} onChange={(e) => setPagibig_id_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Philhealth No.</label>
                <input type='text' value={philhealth_no} onChange={(e) => setPhilhealth_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>SSS No.</label>
                <input type='text' value={sss_no} onChange={(e) => setSss_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>TIN No.</label>
                <input type='text' value={tin_no} onChange={(e) => setTin_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Agency Employee No.</label>
                <input type='text' value={agency_employee_no} onChange={(e) => setAgency_employee_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Citizenship</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Residential Address</label>
                <input type='text' value={residential_address} onChange={(e) => setResidential_address(e.target.value)} />
            </div>
            <div className="form-group">
                <label>ZIP Code</label>
                <input type='text' value={zip_code} onChange={(e) => setZip_code(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Permanent Address</label>
                <input type='text' value={permanent_address} onChange={(e) => setPermanent_address(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Telephone No.</label>
                <input type='text' value={telephone_no} onChange={(e) => setTelephone_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mobile No.</label>
                <input type='text' value={mobile_no} onChange={(e) => setMobile_no(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Email Address</label>
                <input type='email' value={email_address} onChange={(e) => setEmail_address(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Father's Name</label>
                <input type='text' value={fathers_name} onChange={(e) => setFathers_name(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Mother's Name</label>
                <input type='text' value={mothers_name} onChange={(e) => setMothers_name(e.target.value)} />
            </div>
            <button className="submit-button" type='submit'>Submit</button>
        </form>
    );
};

export default ItemForm;