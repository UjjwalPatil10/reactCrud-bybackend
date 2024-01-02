import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const Master = () => {
    return (

        <div className="tab-content pl-3 pt-2 mt-3" id="nav-tabContent" style={{ overflowY: "hidden" }}>
            <div className="tab-pane fade active show in" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
                <div className="card">
                    <div className="card-body card-block">
                        {/* 1st row  */}
                        <div className="row mt-2 ">
                        <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="auctionname" className="form-control-label auction">Auction Name</label>
                                    <input className="auction-name nameInp form-control mt-2" type="text" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 ">
                                <div className="form-group">
                                <label for="auctioninventory" className="form-control-label auction">Auction Inventory</label>

                                <select className="select-inp input-group mt-2" >
                                    <option value="0">Please select</option>
                                    <option value="1">Certificate</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 ">
                                <div className="form-group">
                                <label for="datepicker" className="form-control-label auction">Viewing Date</label>

                                <input type="text" id="datepicker" className="form-control view-dateInp mt-2" />

                                </div>
                            </div>

                        </div>

                        {/* 2nd row */}
                        <div className="row mt-4">
                        <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="viewingtime" className="form-control-label">Viewing Time</label>

                                <input type="text" id="viewingtime" className="form-control mt-2 viewTimeInp"  />

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="startdate" className="form-control-label">Start Date</label>

                                <input type="text" id="startdate" className="form-control mt-2 startDateInp" />

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="starttime" className="form-control-label">Start Time</label>


                                <input type="text" id="starttime" className="form-control mt-2 startTimeInp"  />


                                </div>
                            </div>

                        </div>
                          
                           {/* 3rd row  */}
                        <div className="row mt-4 ">
                        <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="enddate" className="form-control-label">End Date</label>


                                <input type="text" id="viewingtime" className="form-control mt-2 endDateInp" />

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="endtime" className="form-control-label">End Time</label>

                                <input type="text" id="startdate" className="form-control mt-2 endTimeInp" />

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="defaultincrement" className="form-control-label">Default Bid Increment By</label>


                                <input type="text" id="starttime" className="form-control mt-2 defaultIncrementInp" />


                                </div>
                            </div>

                        </div>

                     
                           {/* 4th row  */}
                    
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="form-group auction-result">
                                    <label for="aucresdate" className="form-control-label">Auction Result Date</label>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group ">

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">

                                </div>
                            </div>
                        </div>


                        
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" id="aucresdate" className="form-control  auctionResult" style={{ border: "1px solid #ccc" }} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox1" className="form-check-label">
                                                    <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" className="form-check-input auctionResult" style={{ border: "1px solid gray" }} /> <span>Hide Bulk Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox2" className="form-check-label">
                                                    <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" className="form-check-input auctionResult" style={{ border: "1px solid gray" }} /> <span>Allow Proxy Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox3" className="form-check-label">
                                                    <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow PopCorn Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          {/* 5th row  */}
<div className="row mt-4 ">
                        <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="seldeadlinetype" className="form-control-label">Extend Deadline within Type</label>


                                <select className="select-inp input-group mt-2" >
                                    <option value="0">Please select</option>
                                    <option value="1">Minutes</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </select>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="exdeadlinevalue" className="form-control-label">Extend Deadline within Value</label>


                                <input type="text" id="exdeadlinevalue" className="form-control mt-2" />

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                <label for="numberbidextend" className="form-control-label">No. of Times Bid Extend</label>


                                <input type="text" id="numberbidextend" className="form-control
                                " />


                                </div>
                            </div>

                        </div>

                            {/* 6th row  */}
                                                    
                        <div className="row mt-4 ">
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label for="auctionmode" className="form-control-label">Auction Mode</label>
                                    <select className="mt-3 auction-mode"  >
                                        <option value="0">View</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label for="recordstatus" className="form-control-label">Record Status</label>
                                    <select className="mt-3 auction-mode"  >
                                        <option value="0">Active</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-8 ">
                                <div className="form-group">
                                    <label for="recordstatus" className="form-control-label">Description</label>
                                    <textarea id="numberbidextend" className="form-control mt-3 "></textarea>
                                </div>
                            </div>

                            {/* submit and cancel section  */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="modal-footer d-flex justify-content-start">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div >



    )
}

export default Master