import React from "react";






// export const IndData= [
//     {
//         Name: 'Jake Paroulta',
//         ID: 2,
//         Date:'23rd july',
//         Time: '9:00am',

//     },
//     {
//         Name: 'Amy Paroulta',
//         ID: 2,
//         Date:'23rd july',
//         Time: '9:00am',

//     },
//     {
//         Name: 'Jake Paroulta',
//         ID: 2,
//         Date:'23rd july',
//         Time: '9:00am',

//     },
//     {
//         Name: 'Jake Paroulta',
//         ID: 2,
//         Date:'23rd july',
//         Time: '9:00am',

//     },
//     {
//         Name: 'Jake Paroulta',
//         ID: 2,
//         Date:'23rd july',
//         Time: '9:00am',

//     },
// ]


const DataI = () => {
    return ( 
        <div className="datai">
            <h1>hello</h1>
            <tr>
                          <td className="col-sm-8 col-md-6">
                          <div className="media">

                              <div className="media-body">
                                  <h4 className="media-heading"><a href="#">Product name</a></h4>
                              </div>
                          </div></td>
                          <td className="col-sm-1 col-md-1" styles="text-align: center">
                          <input type="number" name="quantity" min="1" max="10" className="form-control"/>
                          </td>
                          <td className="col-sm-1 col-md-1 text-center"><strong>500:-</strong></td>
                          <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                          <td className="actions" data-th="">
                            <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                         </td>
                      </tr>
            {this.state.data.map(( listValue, index ) => {
            return (
            <tr key={index}>
              <td>{listValue.Name}</td>
              <td>{listValue.ID}</td>
              <td>{listValue.Date}</td>
              <td>{listValue.Time}</td>
            </tr>
          );
        })}
        </div>
     );
}
 
export default DataI;