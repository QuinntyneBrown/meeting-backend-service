using System;
using System.Collections.Generic;
using MeetingBackendService.Data;
using MeetingBackendService.Dtos;
using System.Data.Entity;
using System.Linq;
using MeetingBackendService.Models;

namespace MeetingBackendService.Services
{
    public class MeetingService : IMeetingService
    {
        public MeetingService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Meetings;
            _cache = cacheProvider.GetCache();
        }

        public MeetingAddOrUpdateResponseDto AddOrUpdate(MeetingAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Meeting());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new MeetingAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        public ICollection<MeetingDto> Get()
        {
            ICollection<MeetingDto> response = new HashSet<MeetingDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new MeetingDto(entity)); }    
            return response;
        }


        public MeetingDto GetById(int id)
        {
            return new MeetingDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Meeting> _repository;
        protected readonly ICache _cache;
    }
}
