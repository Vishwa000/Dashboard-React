import React from "react";

function Card({ value, price, color, font, progress, values }) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
      <div class={`card border-left-${color} shadow h-100 py-2`}>
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <p
                class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {value}
              </p>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{price}</div>
            </div>
            <div class="col">{progress}</div>
            <div class="col-auto text-gray-300">{font}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
