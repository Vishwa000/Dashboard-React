import React from "react";
import Card from "./Card";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDollarSign,
  faClipboard,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { fad } from "@fortawesome/free-regular-svg-icons";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);
function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        <Card
          value="Earnings(Monthly)"
          price="$40,000"
          color="primary"
          font={
            <FontAwesomeIcon
              style={{ height: "35px", marginTop: "15px" }}
              icon={faCalendar}
            />
          }
        />
        <Card
          value="Earnings(Annual)"
          price="$215,000"
          color="success"
          font={
            <FontAwesomeIcon
              style={{ height: "35px", marginTop: "15px" }}
              icon={faDollarSign}
            />
          }
        />
        <Card
          value="Tasks"
          price="50%"
          color="info"
          progress={
            <div class="progress progress-sm mr-600">
              <div class="progress-bar bg-info" role="progressbar"></div>
            </div>
          }
          font={
            <FontAwesomeIcon
              style={{ height: "35px", marginTop: "15px" }}
              icon={faClipboard}
            />
          }
        />
        <Card
          value="Pending Requests"
          price="18"
          color="warning"
          font={
            <FontAwesomeIcon
              style={{ height: "35px", marginTop: "15px" }}
              icon={faComments}
            />
          }
        />
      </div>

      <div className="row">
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="chart-area">
                <Line
                  options={{
                    responsive: true,
                  }}
                  data={{
                    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
                    datasets: [
                      {
                        label: "Earning",
                        data: [0, 10000, 8000, 15000, 12500],
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.3,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>

            <div class="card-body">
              <Doughnut
                data={{
                  labels: ["Direct", "Social", "Referral"],
                  datasets: [
                    {
                      label: "Direct",
                      label: "Social",
                      label: "Referral",
                      data: [55, 30, 15],
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
