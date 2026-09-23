import "../../styles/components/Industries.css";

const INDUSTRIES_DATA = [
  {
    id: 1,
    title: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Retail & FMCG",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hospitality, Food & Beverage",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Retail & FMCG",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Hospitality, Food & Beverage",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Retail & FMCG",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Hospitality, Food & Beverage",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Industries() {
  return (
    <section className="r4m-industries" id="industries">
      <div className="r4m-industries__container">
        {/* Header Block */}
        <div className="r4m-industries__header">
          <span className="r4m-industries__tag">FOR BUSINESSES</span>
          <h2 className="r4m-industries__title">
            INDUSTRIES WE <span className="orange">SERVE</span>
          </h2>
          <p className="r4m-industries__subtitle">
            R4M works with organizations across industries with different workforce requirements.
          </p>
        </div>

        {/* 4x3 Card Grid */}
        <div className="r4m-industries__grid">
          {INDUSTRIES_DATA.map((item) => (
            <div className="r4m-industry-card" key={item.id}>
              <div className="r4m-industry-card__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="r4m-industry-card__img"
                />
              </div>
              <div className="r4m-industry-card__title-bar">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
