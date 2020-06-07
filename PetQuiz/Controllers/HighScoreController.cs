using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PetQuiz.Controllers
{
    //[ApiController]
    public class HighScoreController : Controller
    {
        private readonly ApplicationDbContext db;

        public HighScoreController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // GET: HighScoreController
        public ActionResult Index()
        {
            return View();
        }

        // GET: HighScoreController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: HighScoreController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: HighScoreController/Create
        [HttpPost]
        [Route("/savescore")]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HighScoreController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: HighScoreController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HighScoreController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: HighScoreController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
