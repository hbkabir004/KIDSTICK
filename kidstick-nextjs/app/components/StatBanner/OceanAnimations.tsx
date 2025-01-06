export function OceanAnimations() {
    return (
      <>
        <div className="absolute left-8 top-12 w-12 h-12 text-purple-500 animate-float">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,4C8,4,4.9,5.7,3.3,8.3C2.5,9.4,2,10.6,2,12c0,1.4,0.5,2.6,1.3,3.7C4.9,18.3,8,20,12,20s7.1-1.7,8.7-4.3 C21.5,14.6,22,13.4,22,12c0-1.4-0.5-2.6-1.3-3.7C19.1,5.7,16,4,12,4z M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18z M12,8c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S14.2,8,12,8z"/>
          </svg>
        </div>
  
        <div className="absolute right-12 top-16 w-10 h-10 text-blue-600 transform -scale-x-100 animate-float-reverse">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5,9.5c-0.3-0.3-0.7-0.4-1.1-0.4h-13c-0.4,0-0.8,0.1-1.1,0.4c-0.3,0.3-0.4,0.7-0.4,1.1v2.8c0,0.4,0.1,0.8,0.4,1.1 c0.3,0.3,0.7,0.4,1.1,0.4h13c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.4-0.7,0.4-1.1v-2.8C19.9,10.2,19.8,9.8,19.5,9.5z M17,12.5 c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S17.6,12.5,17,12.5z"/>
          </svg>
        </div>
  
        <div className="absolute right-8 top-8 bubble-animation">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </>
    )
  }
  