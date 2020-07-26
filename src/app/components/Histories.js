import React, { Component } from "react";
import dayjs from 'dayjs'
import PropTypes from "prop-types";

const Histories = ({ history }) => {
  return (
    <div>
      {history?.isLoading ? (
        <div className="loader"></div>
      ) : (
        <div>
        <table>
          <thead>
            <tr>
              <th>Event Date</th>
              <th>Description</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
              {history?.history?.map(e=>
                     <tr key={e.id}>
                     <td>{dayjs(e.event_date_utc).format('DD/MM/YYYY')}</td>
                     <td>{e.details}</td>
                     <td> <a href={e.links.wikipedia}>More...</a></td>
                   </tr>

                  )}

          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

 Histories.propTypes = {
    history: PropTypes.object
 }

export default Histories;
