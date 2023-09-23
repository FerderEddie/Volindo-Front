     // Generate options for time selection
     export const generateTimeOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const ampm = hour < 12 ? "AM" : "PM";
            const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
            const time = `${formattedHour}:${minute === 0 ? "00" : minute} ${ampm}`;
            options.push(time);
          }
        }
        return options;
      };

      