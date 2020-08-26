import React from 'react';

type Props = {
    x: number;
}

function DoodleArrow(props: Props) {
    return (
        <svg width="107px" height="130px" viewBox="0 0 107 130" version="1.1" strokeDashoffset={props.x}>
            <title>doodle_arrow</title>
            <g id="Landings" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.796781994">
                <g id="Spark" transform="translate(-318.000000, -598.000000)" fill="#FF0000">
                    <g id="Doodles" transform="translate(303.000000, 77.000000)">
                        <path
                            d="M151,561.969948 C150.761933,562.432147 150.544596,562.90862 150.281117,563.355186 C149.570258,564.558263 148.735685,565.698127 148.136504,566.954221 C146.185154,571.041965 144.385606,575.204475 142.393464,579.270468 C141.050657,582.011037 139.585472,584.703346 137.976512,587.289622 C137.524748,588.015546 136.984878,588.683604 136.426059,589.340159 L135.582265,590.322162 C135.161907,590.814645 134.750342,591.313699 134.376746,591.838885 C132.599934,594.335439 131.158824,597.112032 129.180725,599.420989 C126.102568,603.015946 122.964893,606.652365 119.367802,609.675691 C111.415951,616.359226 102.238989,619.625206 91.7499822,618.964533 L91.1644702,618.928474 L91.1644702,618.928474 L89.994941,618.858899 C85.7108371,618.604365 81.4763859,618.314817 77.4164546,616.62567 C76.9122333,616.415641 75.9693261,616.748017 75.4764731,617.144285 C70.5145073,621.140947 64.812259,623.239875 58.5790403,623.633424 C53.9146587,623.928416 49.1352558,624.304292 44.5658336,623.590603 C40.7326816,622.992463 36.987133,621.156581 33.4656085,619.341769 C30.3352902,617.727471 27.4296647,615.563292 24.667147,613.331822 C20.7323483,610.152164 17.9317131,605.995091 16.0779976,601.256191 C15.8118437,600.575807 16.2699227,599.316994 16.8015619,598.675353 C17.3920492,597.961663 18.2406657,598.304234 19.2069785,598.744003 C21.5834964,599.825996 22.8498943,601.830718 24.0821151,603.844253 L24.4181363,604.39293 C24.6426634,604.757946 24.8692941,605.120506 25.1044955,605.475117 C28.2227767,610.178673 32.7039267,612.955266 37.8317372,614.432943 C46.5807127,616.954647 55.2848834,615.894308 63.7315937,612.790777 C68.2943285,611.113266 68.2495237,610.922949 64.9246054,607.593076 C60.5484458,603.211021 58.1269798,597.980015 58.4620128,591.677115 C58.8512128,584.361455 64.8316521,579.21881 72.0345273,579.756457 C74.2954985,579.925703 75.8349116,581.332012 77.3134704,582.779782 C80.6718252,586.068873 82.5482775,590.173608 83.2029627,594.830264 C83.8810535,599.64733 84.0061057,604.427013 81.751153,608.955884 C81.206808,610.049529 81.7304225,610.527361 82.867261,610.581058 C83.9897218,610.634414 85.1113468,610.703574 86.232721,610.777322 L89.5966763,611.001115 L89.5966763,611.001115 C100.461509,611.396023 109.596341,607.213122 117.784922,600.299167 C127.106998,592.428188 134.337291,582.812408 140.67015,572.423124 C142.588064,569.276772 144.427067,566.078762 146.418541,562.982028 C146.952186,562.150749 147.824877,561.303838 148.711611,561.029237 C149.323498,560.839599 150.22695,561.62126 151,561.969948 Z M69.2793657,612.155253 L64.4591703,614.935245 L64.4591703,614.935245 L64.6811882,615.453859 L64.6811882,615.453859 L69.588987,612.728924 C69.4860028,612.537247 69.3823499,612.34625 69.2793657,612.155253 Z M110.913067,607.60803 C108.207392,608.84985 105.501716,610.09235 102.79604,611.33417 C102.864919,611.463994 102.933798,611.593817 103.002677,611.723641 C105.723065,610.550471 108.443453,609.376621 111.164509,608.202771 C111.080918,608.004298 110.996658,607.805824 110.913067,607.60803 Z M6.31726772,583.031464 C10.5796352,585.167975 15.3376117,585.222978 19.8091353,586.451604 C22.8035751,587.274665 25.5927562,588.607996 27.4881522,591.27002 C27.8661921,591.801497 27.8402099,592.63251 28,593.32502 C27.3264134,593.46286 26.611905,593.824026 25.9870349,593.702753 C21.4434109,592.820051 16.9075816,591.885659 12.3918884,590.865117 C10.9752131,590.545038 10.7186396,591.103022 10.5510549,592.370747 C10.1639212,595.295859 9.54944398,598.188499 9.12853357,601.109635 C8.94795781,602.358142 9.01616088,603.643759 8.98433278,604.91281 C8.98173457,605.01884 9.1447724,605.140775 9.12593536,605.232889 C9.07754365,605.470794 9.03556628,605.755005 8.99423846,606.048463 L8.94458792,606.402679 C8.83608852,607.169485 8.71639212,607.898591 8.48417689,607.93865 C7.4533361,608.117577 6.17241738,607.898226 5.24290688,607.370725 C3.22451715,606.225168 3.06194953,604.411734 3.05465645,602.433084 L3.05495575,601.973768 C3.05721714,601.281082 3.06240976,600.573232 3,599.871068 C3.33841717,595.845891 3.84831636,591.515215 3.98991894,587.172611 C4.03993453,585.654389 3.57680316,584.221654 5.22926626,583.362808 C5.56898254,583.186533 6.06589067,582.905553 6.31726772,583.031464 Z M73.252282,587.655303 C69.2994275,588.528044 66.3737402,592.068625 66.0233264,596.31338 C65.6408137,600.940128 68.2762729,603.793528 71.5262936,606.283965 C71.7804104,606.479041 72.7219802,606.141228 73.0516634,605.777586 C75.7640264,602.780768 76.5477762,599.102207 76.725658,595.1171 C76.3464889,593.067111 76.0067748,591.008286 75.5754449,588.969172 C75.309291,587.709679 74.5141727,587.377304 73.252282,587.655303 Z"
                            id="doodle_arrow"
                            style={{mixBlendMode: 'hard-light'}}
                            transform="translate(77.000000, 592.500000) rotate(-40.000000) translate(-77.000000, -592.500000)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default DoodleArrow;