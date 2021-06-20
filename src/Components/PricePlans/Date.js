import React from 'react';

export const Year = () => {
    return (
        <div className="form-group">
            <label className="form-label">Expration Year</label>
            <select className="form-control" name="expiry" required="">
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
            </select>
            <div className="help-block with-errors"></div>
        </div>
    )
}

export const Day = () => {
    return (
        <div className="form-group">
            <label className="form-label">Expration Day</label>
            <select className="form-control" name="expiry" required="">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <div className="help-block with-errors"></div>
        </div>
        )
}