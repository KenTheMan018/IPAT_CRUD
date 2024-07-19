import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div className="item-list-container">
            <h1>Items</h1>
            <ul className="item-list">
                {items.map(item => (
                    <li key={item.id} className="item">

                        <div className="item-details">
                        <span>{item.first_name} :</span>
                        <span>{item.middle_name} :</span> 
                        <span>{item.last_name} :</span>
                        <span>{item.date_of_birth} :</span> 
                        <span>{item.place_of_birth} :</span> 
                        <span>{item.sex} :</span> 
                        <span>{item.civil_status} :</span> 
                        <span>{item.height} :</span> 
                        <span>{item.weight}kg :</span> 
                        <span>{item.blood_type} :</span> 
                        <span>{item.gsis_id_no} :</span> 
                        <span>{item.pagibig_id_no} :</span> 
                        <span>{item.philhealth_no} :</span> 
                        <span>{item.sss_no} :</span> 
                        <span>{item.tin_no} :</span> 
                        <span>{item.agency_employee_no} :</span> 
                        <span>{item.citizenship} :</span> 
                        <span>{item.residential_address} :</span> 
                        <span>{item.zip_code} :</span> 
                        <span>{item.permanent_address} :</span> 
                        <span>{item.telephone_no} :</span> 
                        <span>{item.mobile_no} :</span> 
                        <span>{item.email_address} :</span> 
                        <span>{item.fathers_name} :</span> 
                        <span>{item.mothers_name}</span>
                        </div>

                        <div className="item-actions">
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;