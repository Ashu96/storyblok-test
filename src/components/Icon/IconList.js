import React from 'react'

export default {
  tick: props => (
    <svg
      width="12px"
      height="9px"
      viewBox="0 0 12 9"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Path Copy 5</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Marketing-Site"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="PRICING"
          transform="translate(-585.000000, -656.000000)"
          fill="#7D60FF"
          fill-rule="nonzero"
        >
          <g id="Group-20" transform="translate(585.000000, 648.000000)">
            <path
              d="M0,12.6191447 C0,12.3845487 0.10839857,12.1280765 0.292946172,11.9530185 L0.883243842,11.3975045 C1.25126817,11.0504226 1.81329544,11.0504226 2.18442695,11.3985543 L2.23840553,11.4501281 L4.33818084,13.5740426 L9.91873669,8.11969769 L10.0086067,8.11969769 C10.362305,7.92204606 10.8081228,7.96921103 11.1156319,8.26092217 L11.7067472,8.81720637 C12.0966121,9.18488602 12.0966121,9.77886187 11.7135357,10.1421705 L4.96540366,16.7387488 C4.78290423,16.9118697 4.57038782,17 4.31425719,17 C4.05739039,17 3.84578589,16.9120364 3.650474,16.7263502 L0.309407687,13.3262072 L0.248037104,13.2398211 C0.0910337123,13.0688654 0,12.8350628 0,12.6191447 Z"
              id="Path-Copy-5"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  chevron: props => (
    <svg
      width="8px"
      height="14px"
      viewBox="0 0 8 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>arrow</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Skill" transform="translate(-322.000000, -685.000000)">
          <g id="arrow" transform="translate(315.000000, 682.000000)">
            <g id="Group-9-Copy-5">
              <rect
                id="Rectangle-Copy-10"
                fill="#EDEAFA"
                opacity="0"
                x="0"
                y="0"
                width="20"
                height="20"
                rx="10"
              ></rect>
              <path
                d="M13.8366112,9.572 L8.94402421,4.177 C8.72617247,3.941 8.38124054,3.941 8.1633888,4.177 C7.94553707,4.413 7.94553707,4.797 8.1633888,5.033 L12.6747352,10 L8.1633888,14.966 C7.94553707,15.202 7.94553707,15.586 8.1633888,15.823 C8.38124054,16.059 8.72617247,16.059 8.94402421,15.823 L13.8366112,10.428 C14.0544629,10.195 14.0544629,9.805 13.8366112,9.572 Z"
                id="Chevron-Right_2"
                stroke="#7D60FF"
                stroke-width="0.75"
                fill="#7D60FF"
                fill-rule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  dot: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <circle cx="10" cy="10" r="3" fill="#7D60FF" />
    </svg>
  ),
  menu: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  ),
  close: props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  )
}
