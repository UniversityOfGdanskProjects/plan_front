export const filterData = (data, filterBy, Component, handleChange) => {
      const groups = data.reduce((acc, item) => {
      const group = item[filterBy];

      if (!acc[group]) {
        acc[group] = [item];
      } else {
        acc[group].push(item);
      }
      return acc;
    }, {});

    const groupNames = Object.keys(groups);
    return(
      groupNames.map((groupName, j) => {
        const group = groups[groupName];
        const groupElements = group.map((item, i) => (
          <Component
            id={item.id}
            i={i}
            handleChange={handleChange}
            key={i}
            schedule={data}
          />
        ));
        return (
          <section key={j} className="mb-4">
            <h2 className="text-3xl font-bold">{groupName}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center grid-flow-row gap-4">
              {groupElements}
            </div>
          </section>
        );
      })
    );

  }
