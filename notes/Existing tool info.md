# MExit Blog Scraper & Knowledge Platform
https://github.com/Moving-Data-Insights/web-scraper

A robust, extensible Python and JS system to extract, analyze, and visualize blog articles, metadata, and knowledge relationships from [MExit Blog](https://www.mexit.ca/blog). Includes a modern chat UI, worksheet generator, and interactive knowledge graph.

## Features
- Extracts title, author, publication date, article text, hashtags, views, comments, and PDF downloads
- Handles infinite scroll with Selenium for complete article coverage
- Stores data in Supabase with deduplication by URL
- Modular, well-documented codebase for easy extension
- Weekly scheduling support (see below)
- **RAG pipeline**: Embeds, chunks, and indexes articles for LLM-powered Q&A
- **Semantic map**: Visualizes articles as a 2D scatterplot, clustered by topic
- **Knowledge graph**: Interactive, cluster-aware visualization of article relationships
- **Frontend**: Modern chat UI, worksheet PDF generator, and knowledge graph explorer

## Project Structure

- `scraper/`
  - `blog_scraper.py`: Main scraping logic and orchestration
  - `utils.py`: HTTP, date, and Selenium helpers
  - `pdf_utils.py`: PDF download and text extraction
- `db/`
  - `supabase_client.py`: Supabase integration and upsert logic
- `rag/`
  - `app.py`: FastAPI backend for chat, worksheet, and semantic map endpoints
  - `embedding_map.py`: Embedding, clustering, and 2D reduction logic
  - `static/`: Frontend HTML/JS for chat and knowledge graph
- `config.py`: Loads environment variables and constants
- `main.py`: Entry point for manual or scheduled runs

## Setup

1. **Clone the repo**
2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your Supabase credentials:
     ```
     SUPABASE_URL=your-supabase-url
     SUPABASE_KEY=your-supabase-key
     OPENAI_API_KEY=your-openai-key
     ```
4. **Install Chrome/Chromium and ChromeDriver** (for Selenium infinite scroll)
   - [Chrome Download](https://www.google.com/chrome/)
   - [ChromeDriver Download](https://sites.google.com/chromium.org/driver/)
   - Ensure `chromedriver` is in your PATH

## Usage

### Manual Run
```bash
python main.py
```
- Scrapes all articles, skipping those already in Supabase.
- Prints progress and a summary at the end.

### Chat & Knowledge Graph UI
- Start the FastAPI backend:
  ```bash
  uvicorn rag.app:app --reload
  ```
- Visit [http://localhost:8000/static/index.html](http://localhost:8000/static/index.html)
- Ask questions, view sources/context, and explore the knowledge graph.

### Scheduled Run (Weekly)
Add this to `main.py` or a new `scheduler.py`:
```python
import schedule, time
from main import main as run_scraping_job
schedule.every().week.do(run_scraping_job)
while True:
    schedule.run_pending()
    time.sleep(3600)
```
Deploy to Railway.app or your preferred scheduler.

## Knowledge Graph & Semantic Map
- Articles are embedded, clustered (KMeans), and reduced to 2D (t-SNE) for visualization.
- The frontend (Plotly.js) shows clusters, highlights sources/context, and supports interactive exploration.
- See `rag/embedding_map.py` and `rag/static/semantic_map.html` for details.

## Documentation Standards
- All code is documented per project standards (see file headers, function/class docstrings, and inline comments).
- See `todo.md` for project progress and documentation tasks.
- For schema and API docs, see file headers and endpoint docstrings in `rag/app.py`.

## Example Output
- Articles are stored in the `blog_articles` table in Supabase with fields:
  - `site`, `url`, `title`, `author`, `publication_date`, `updated_date`, `content`, `pdf_text`, `hashtags`, `views`, `comments`, `x`, `y`, `cluster`, `keywords`

## Troubleshooting
- **Selenium/ChromeDriver errors:** Ensure Chrome/Chromium and ChromeDriver are installed and in your PATH.
- **Supabase errors:** Check your `.env` for correct credentials and project URL.
- **No content/hashtags:** Inspect the blog HTML and update selectors in `parse_article_page` as needed.

## Manual Validation Steps
1. Run the scraper and check the console for progress and summary.
2. Inspect the `blog_articles` table in Supabase for new/updated records.
3. Verify that all fields (content, hashtags, PDF text, etc.) are populated as expected.
4. If issues arise, check logs and update selectors or credentials as needed.

## Contributing & Extending
- All code is documented per PEP 257 and project standards.
- To add new fields or support new blog structures, update the relevant parsing logic and docstrings.
- For questions or improvements, open an issue or PR.

> **Cloud Deployment?** See the [🚀 Deploying to Railway](rag/README.md#deploying-to-railway) section below for step-by-step instructions to deploy this project on Railway.

> **Note:** The web scraper is not run in production. Only the chatbot (FastAPI) is deployed on Railway. The scraping logic is retained in the codebase for reference or future use, but is not executed or required for the live service.

---

**Author:**
- [Your Name or Organization]
- [MExit Blog](https://www.mexit.ca/blog) 


# Main Website
https://github.com/Moving-Data-Insights/huddly-succession-flow

This has the questionnaire schema driven UI, all of the user data. This project has: questionnaire questions and respondents answers, Scoring system (Huddly Rating System, HRS), LLM that generates suggestions and text for a one page PDF that gets generated. 

